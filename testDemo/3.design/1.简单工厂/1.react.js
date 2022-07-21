let h1 = <h1 class="title">hello</h1>
let h1 = React.createElement('h1',{ className: 'title'}, 'hello')
// h1就是虚拟DOM
class VNode {
  constructor(tagName, attrs, child){
    this.tagName = tagName
    this.attrs = attrs
    this.child = child
  }
}
function createElement(tagName, attrs, child) {
  return new VNode(tagName, attrs, child)
}