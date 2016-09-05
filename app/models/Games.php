<?php
namespace KSL\Models;

class Games extends Base
{
    //
    // https://laravel.com/docs/5.3/eloquent
    //
    protected $table = 'games';
    //protected $primaryKey = 'id'; // Not necessary as this is default
    public $timestamps = false;
    
    
    
    public function scopePlayedBy($query, $teamId) {
        return $query->where('hometeam', $teamId)->orWhere('awayTeam', $teamName);
    }
    
    public function scopeWonBy($query, $teamId) {
        return $query->where([['hometeam', $teamId], ['won', 'home']])->orWhere([['awayTeam', $teamName], ['won', 'away']]);
    }
    
    public function scopeLostBy($query, $teamId) {
        return $query->where([['hometeam', $teamId], ['won', 'away']])->orWhere([['awayTeam', $teamName], ['won', 'home']]);
    }
}