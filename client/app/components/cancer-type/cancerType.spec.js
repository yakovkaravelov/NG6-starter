import CancerTypeModule from './cancerType'

describe('CancerType', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(CancerTypeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('cancerType component should be here', () => {
      $location.url('/cancer-type');
      $rootScope.$digest();
      expect($state.current.component).to.eq('cancerType');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('cancerType', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<cancerType></cancerType>')(scope);
      scope.$apply();
    });
  });
});
