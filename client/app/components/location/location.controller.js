class LocationController {
  constructor($state, Bot) {
    "ngInject";

    this.name = 'location';
    this.title = 'What city do you live in?';
    this.$state = $state;
    this.Bot = Bot;
    this.data = {
      medicalInput: '',
    };
  }

  submitMedicalInput () {
    this.Bot.getMedicalData(this.data.medicalInput)
      .then((response) => {
        if (response.nextStep === 3) {
          this.$state.go('gender');
        } else if (response.nextStep === 4) {
          this.$state.go('age');
        }
      })
      .catch((err) => {
        console.log(err);
        this.$state.go('gender');
      });
  }
}

export default LocationController;
