Page({
  data: {
    progressValue: 0
  },

  increaseProgress() {
    if (this.data.progressValue < 100) {
      this.setData({
        progressValue: this.data.progressValue + 1
      });
    }
  },

  decreaseProgress() {
    if (this.data.progressValue > 0) {
      this.setData({
        progressValue: this.data.progressValue - 1
      });
    }
  },
  onShareAppMessage(){
    
  }
});
