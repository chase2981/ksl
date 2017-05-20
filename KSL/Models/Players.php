<?php
namespace KSL\Models;
use \Illuminate\Database\Connection;

class Players extends Base
{
    //
    // https://laravel.com/docs/5.3/eloquent
    //
    protected $table = 'players';
    //protected $primaryKey = 'id'; // Not necessary as this is default
    public $timestamps = false;
    
    
    /*
    There may be some kind of Team scope that would filter players playing for certain team
    public function scopeTeam($query, $teamId) {
        return $query->where('hometeam', $teamId)->orWhere('awayTeam', $teamName);
    }
    */
    
    
    public function GetTeam() {
        $team_id = Roster::
            select($this->getConnection()->raw('`team_id`'))
            ->where('season_id', '=', $this->getConnection()->raw(Season::GetActual()->id))
            ->where('player_id', '=',  $this->getConnection()->raw($this->id))
            ->first()
            ->team_id;
            
        return Teams::find($team_id);
    }
    
    
    //
    // Generate seo for each player in database that has seo set to null
    //
    public static function GenerateSEOGlobally() {
        $players = self::get();
        
        foreach($players as $player) {
            if($player->seo != null) continue;
            
            $player->GenerateSEO();
        }
    }
    
    
    //
    // Generate seo column for player
    // seo name is geenrated from nick (if set), otherwise from name
    //
    public function GenerateSEO() {
        $seo      = iconv('UTF-8', 'ASCII//TRANSLIT', $this->nick != null 
            ? $this->nick
            : $this->name.'_'.$this->surname);
            
        $this->seo = strtolower(str_replace(' ', '_', $seo));
        $this->save();
        
        return $seo;
    }
    
    
    
    //
    // Get count of games played by $this player this (Roster::GetActualYear) season
    //
    public function GetGamesCount() {
        $modelInstance = new Static();
        
        $sql = '
            SELECT 
                COUNT( * ) AS `count`
            FROM 
            (
                SELECT score_list.id
                FROM  `score_list` 
                INNER JOIN  `roster` ON  `score_list`.`player_id` =  `roster`.`player_id` AND  `roster`.`season_id` = '.Season::GetActual()->id.'
                WHERE  `score_list`.`player_id` = "'.(int)$this->id.'"
                GROUP BY  `score_list`.`game_id`
            ) t
            ';
        
         $result = $modelInstance->getConnection()->select($sql)[0];
         return $result->count;
    }
    
    
    //
    // Get sum of points scored by $this player this season
    //
    // Arguments:
    // $only3pt - should only 3pts be considered? 
    //          If true, returned sum represents number of made 3pt shots, 
    //          if false [default], returned number represents number of made points (from 2pt & 3pt shots)
    // $allSeasons - should points from all seasons be considered? If false [default] only active season is considered
    public function GetPointsSum($only3pt = null, $allSeasons = null) {
        
        if($only3pt === true) {
            $query = ScoreList::select($this->getConnection()->raw('sum(`score_list`.`value`="3") as "sum"'));
            $query->where('score_list.value', '3');
        }
        else $query = ScoreList::select($this->getConnection()->raw('sum(`score_list`.`value`) as "sum"'));
        
        $query->where('score_list'.'.player_id', $this->id);
                
                
        if($allSeasons !== true) {
            $query->groupBy('score_list.player_id')
            ->join('roster', function($join){
                $join->on('score_list.player_id', '=', 'roster.player_id');
                $join->where('roster.season_id', '=', Season::GetActual()->id);
            });
        }
            
            
        $fetched = $query->first();
        return $fetched !== null && is_numeric($fetched->sum) ? $fetched->sum : 0;
    }
    
    
    /**
     * returns all players active specific season
     */
    public static function GetPlayersBySeason($season_id) {
        $players            = [];
        $playersCollection  = static::join('roster', function($join) use($season_id) {
            $join->on('roster.player_id', '=', 'players.id')
                 ->where('roster.season_id', '=', $season_id);
        })->get();
        
        foreach($playersCollection as $player) {
            $players[$player->id] = $player;
        }
        
        return $players;
   }


   public function GetRank() {
       $pointsScored = $this->GetPointsSum(false, true);


       $betterPlayersSql = '
            SELECT COUNT(*) AS `count` FROM
            (
                SELECT SUM(value) as `sum`, t1.* FROM score_list t1 GROUP BY player_id 
                HAVING `sum` > '.(int)$pointsScored.'
                ORDER BY `sum` DESC
            ) td1
            ';
        
        $betterPlayersCount = $this->getConnection()->select($betterPlayersSql)[0]->count;

        return $betterPlayersCount + 1;
   }


   public function GetOverall() {
       return 100 - $this->GetRank();
   }


    public function GetGamesPlayed($season_id = null) {
        $games = Games::join('game_roster', function($join){
                $join->on('games.id', '=', 'game_roster.game_id');
                $join->where('game_roster.player_id', '=', $this->id);
            });

        if(is_numeric($season_id)) $games = $games->Where('season_id', $season_id);

        return $games->get();
   }


   public function GetGamesStatistics($season_id = null) {
        $games = Games::select($this->getConnection()->raw('
            sum(`won` = "home" AND games.hometeam = roster.team_id)+sum(`won` = "away" AND games.awayteam = roster.team_id) AS `won`,
            sum(`won` = "away" AND games.hometeam = roster.team_id)+sum(`won` = "home" AND games.awayteam = roster.team_id) AS `lost` '))
            ->join('game_roster', function($join){
                $join->on('games.id', '=', 'game_roster.game_id');
                $join->where('game_roster.player_id', '=', $this->id);
            })
            ->join('roster', function($join){
                $join->on('roster.season_id', 'games.season_id');
                $join->where('roster.player_id', '=', $this->id);
            });

        if(is_numeric($season_id)) $games = $games->Where('season_id', $season_id);

        return $games->first();
   }
}
