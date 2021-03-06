class HomeController {
  constructor ($state, Bot) {
    "ngInject";

    this.name = 'home';
    this.title = 'MendelX Medical Clinic';
    this.$state = $state;
    this.Bot = Bot;
    this.data = {
      medicalInput: '',
    };
  }

  submitMedicalInput () {
    this.Bot.getMedicalData(this.data.medicalInput)
      .then((response) => {
        if (response.nextStep === 1) {
          this.$state.go('cancerType');
        } else if (response.nextStep === 2) {
          this.$state.go('location');
        }
      })
      .catch((err) => {
        console.log(err);
        this.$state.go('cancerType');
      });
  }
}

export default HomeController;
