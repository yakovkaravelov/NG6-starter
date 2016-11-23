class CancerTypeController {
  constructor($state, Bot) {
    "ngInject";

    this.name = 'cancerType';
    this.title = 'Tell me what kind of cancer do you have?';
    this.$state = $state;
    this.Bot = Bot;
    this.data = {
      medicalInput: '',
    };
  }

  submitMedicalInput () {
    this.Bot.getMedicalData(this.data.medicalInput)
      .then((response) => {
        if (response.nextStep === 2) {
          this.$state.go('location');
        } else if (response.nextStep === 3) {
          this.$state.go('gender');
        }
      })
      .catch((err) => {
        console.log(err);
        this.$state.go('location');
      });
  }
}

export default CancerTypeController;
