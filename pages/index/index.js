Page({
  data: {
    array: ['选项一', '选项二', '选项三'],
    options: [
      { text: '选项A', value: '1', checked: true },
      { text: '选项B', value: '2' },
      { text: '选项C', value: '3' }
    ]
  },
  toMore(){
    wx.navigateTo({
      url: '/pages/more/more',
    })
  },
  onShareAppMessage(){
    
  }
});
