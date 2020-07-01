

<script>
import BaseChild from "./BaseChild";

export default {
  components: {
    BaseChild
  },
  data () {
      return {
          content:"Alice",
      }
  },
  directives: {
    slice: {
      bind(el, binding, vnode) {
        const vm = vnode.context;
        let { value, expression, arg, modifiers } = binding;

        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }

        el.value = value.slice(0, arg);
        vm[expression] = value.slice(0, arg);

        el.oninput = function(e) {
          let inputVal = el.value;

          if (modifiers.number) {
            inputVal = inputVal.replace(/[^0-9]/g, "");
          }

          el.value = inputVal.slice(0, arg);
          vm[expression] = inputVal.slice(0, arg);
        };
      },
      update(el, binding, vnode) {
        const vm = vnode.context;
        let { value, arg, expression, modifiers } = binding;

        if (modifiers.number) {
          value = value.replace(/[^0-9]/g, "");
        }

        el.value = value.slice(0, arg);
        vm[expression] = value.slice(0, arg);
      }
    }
  },
  render(createElement) {
    const vNode = createElement(
      "h1",
      {
        class: {
          foo: true,
          bar: false
        },
        style: {
          background: "red",
          color: "#fff"
        },
        attrs: {
          id: "data",
          index: 1
        }
      },
      [
        "xxx",
        createElement("base-child", {
          props: {
            name: "base-child组件 props"
          },
          nativeOn: {
            click: function() {
              console.log("组件原生点击");
            }
          }
        }),
        createElement("p", {
          domProps: {
            innerHTML: `<span>domProps</span>`
          },
          on: {
            click: function() {
              console.log("on");
            }
          }
        }),
        createElement("input", {
          directives: [    //  使用自定义指令
            {
              name: "slice",
              value:this.content,
              expression:'content',   // 双向数据绑定 作用
              arg:3,
              modifiers:{
                  number:true,
              }
            }
          ]
        }),
        this.content
      ]
    );

    return vNode; //  要return 不然显示不出来
  }
};
</script>