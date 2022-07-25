class Factory {
  createButton(){ // 创建按钮

  }
  createIcon(){ // 创建图标

  }
}

class Icon {

}
class AppleIcon {

}

class WindowsIcon {
  
}

class Button {

}
class AppleButton {
  
}
class WindowsButton {
  
}
class AppleFactory extends Factory {
  createButton(){ // 创建按钮
    return new AppleButton()
  }
  createIcon(){ // 创建图标
    return new AppleIcon()
  }
}
class WindowsFactory extends Factory {
  createButton(){ // 创建按钮
    return new WindowsButton()
  }
  createIcon(){ // 创建图标
    return new WindowsIcon()
  }
}
