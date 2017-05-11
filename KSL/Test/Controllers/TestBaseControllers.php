<?php

namespace KSL\Test\Controllers;

class TestBaseControllers extends \KSL\Test\TestBase {
    protected $app = null;

    public function setUp() {
        parent::setUp();
        $this->setUpSlim();
    }

    private function setUpSlim() {
        require DIR_ROOT.'/KSL/config_test_env.php';

        //$container = new \Slim\Container;
        //$app = new \Slim\App($container);
        $app        = new \Slim\App(['settings' => $config]);
        $container  = $app->getContainer();
        $container['twig'] = \KSL\Templates::getTwig($container);

        \KSL\Routes::set($app);

        $this->app = $app;
    }

    protected function getRouteResponse($route) {
        $environment    = \Slim\Http\Environment::mock([
            'REQUEST_METHOD' => 'GET',
            'REQUEST_URI' => $route
        ]);

        $request    = \Slim\Http\Request::createFromEnvironment($environment);
        $this->app->getContainer()['request'] = $request;
        return $this->app->run(true);
    }
}