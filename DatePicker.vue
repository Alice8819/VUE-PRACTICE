<template>
  <div class="date-picker" v-click-outside>
    <div class="input">
      <span class="input-prefix">
        <i class="iconfont icon-input"></i>
      </span>
      <input type="text" :value="showedDate" @click="updateDateObj" />
    </div>
    <div class="date-panel" v-if="panelShow">
      <div class="arrow" />
      <div class="picker-panel">
        <div class="panel-header">
          <span class="picker-btn iconfont icon-prev-year" @click="handleChangeYear('--')"></span>
          <span class="picker-btn iconfont icon-prev-month" @click="handleChangeMonth('--')"></span>
          <div class="selected">{{selectDate}}</div>
          <span class="picker-btn iconfont icon-next-month" @click="handleChangeMonth('++')"></span>
          <span class="picker-btn iconfont icon-next-year" @click="handleChangeYear('++')"></span>
        </div>
        <div class="picker-content">
          <div class="week">
            <div v-for="day in ['日','一','二','三','四','五','六']" :key="day">{{day}}</div>
          </div>
          <div class="date">
            <div
              v-for="dateS in getMonthDays"
              :key="dateS.getTime()"
              :class="{'is-nextmonth':!(compare(dateS).nextmonth),'is-today': compare(dateS).today, 'is-selected':compare(dateS).select}"
              @click="handleSelectDay(dateS)"
            >{{dateS.getDate()}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    // 如不传数据会报错
    prop: "date",
    event: "change-date"
  },
  directives: {
    "click-outside": {
      bind(el, binding, vnode) {
        const vm = vnode.context;
        document.onclick = function(e) {
          const flag = el.contains(e.target);
          if (flag && !vm.panelShow) {
            // 绑定的元素是否包含点击元素   包含显示 不然不显示
            vm.panelShow = true;
          } else if (!flag && vm.panelShow) {
            vm.panelShow = false;
          }
        };
      }
    }
  },
  props: {
    date: {
      type: Date,
      default: () => new Date()
    }
  },
  data() {
    return {
      dateObj: {
        year: 0,
        month: 0,
        dat: 0
      },
      panelShow: false
    };
  },
  mounted() {
    const obj = this.getFormattedDate(this.date);
    this.dateObj = obj;
  },
  computed: {
    showedDate() {
      const { year, month, dat } = this.getFormattedDate(this.date);
      return `${year}-${month + 1}-${dat}`;
    },

    selectDate() {
      const { year, month } = this.dateObj;
      return `${year}年${month + 1}月`;
    },
    getMonthDays() {
      let arr = [];
      const { year, month } = this.dateObj;
      let weekDay = new Date(year, month, 1).getDay(); // [0,1,2,3,4,5,6] 星期1就是提前1天
      let firstDay =
        new Date(year, month, 1).getTime() - 24 * 60 * 60 * 1000 * weekDay;

      for (let i = 0; i < 42; i++) {
        let pushDay = new Date(firstDay + 24 * 60 * 60 * 1000 * i);
        arr.push(pushDay);
      }
      return arr;
    }
  },
  methods: {
    getFormattedDate(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const dat = date.getDate();

      return {
        year,
        month,
        dat
      };
    },
    handleSelectDay(time) {
      this.dateObj = this.getFormattedDate(time); // 更新时间为点击的时间
      this.$emit("change-date", time);
      this.panelShow = false;
    },
    handleChangeYear(type){
        const move = type === "--"? -1:1;
        this.dateObj.year += move;
    },
    handleChangeMonth(type){
        const {year,month,dat} = this.dateObj;
        const move = type === '--' ? -1:1;
        const getDate = new Date(year,month,dat);
        getDate.setMonth(month + move);
        const {year:newYear,month:newMonth} = this.getFormattedDate(getDate);
        this.dateObj.year = newYear;
        this.dateObj.month = newMonth;
    },
    compare(date) {
      const { year, month, dat } = this.getFormattedDate(date);
      const {year: yearToday, month: monthToday,dat: datToday} = this.getFormattedDate(new Date());
      const {year: yearDate,month: monthDate,dat: datDate} = this.getFormattedDate(this.date);

      return { //
        nextmonth: year === this.dateObj.year && month === this.dateObj.month,
        today: year === yearToday && month === monthToday && dat === datToday,
        select: year === yearDate && month === monthDate && dat === datDate
      };
    },
    updateDateObj() {
      this.dateObj = this.getFormattedDate(this.date);
    },
  }
};
</script>

<style scoped>
@import "./assets/font.css";

.date-picker {
  display: inline-block;
}

.input {
  position: relative;
}

.input input {
  height: 40px;
  line-height: 40px;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid rgb(202, 200, 200);
  padding: 0 35px;
  color: gray;
}
.input .input-prefix {
  height: 100%;
  width: 25px;
  text-align: center;
  line-height: 40px;
  position: absolute;
  left: 5px;
  color: #ccc;
}
.date-panel {
  width: 322px;
  height: 329px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgb(221, 220, 220);
  position: absolute;
}

.date-panel .arrow {
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-bottom-color: rgb(221, 220, 220);
  position: absolute;
  top: -12px;
  left: 30px;
}
.date-panel {
  user-select: none;
}
.date-panel .arrow::after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  border: 5px solid transparent;
  border-bottom-color: #fff;
  position: absolute;
  left: -5px;
  top: -4px;
}
.picker-panel .panel-header {
  position: relative;
  padding: 15px 0 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.panel-header .picker-btn {
  position: absolute;
  font-size: 12px;
  cursor: pointer;
}
.panel-header .icon-prev-year {
  left: 20px;
}
.panel-header .icon-next-year {
  right: 20px;
}
.panel-header .icon-prev-month {
  left: 60px;
}
.panel-header .icon-next-month {
  right: 60px;
}
.panel-header .selected {
  font-size: 16px;
}

.picker-panel .picker-content {
  padding: 0 10px 10px 10px;
  color: rgb(65, 64, 64);
}

.picker-content .week {
  display: flex;
  justify-content: space-around;
  height: 40px;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
}

.picker-content .date {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.date div {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 4px 6px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}

.date div.is-today {
  color: rgb(10, 136, 209);
  font-weight: bold;
}
.date div.is-nextmonth {
  color: rgb(184, 181, 181);
}
.date div.is-selected {
  background: rgb(8, 147, 228);
  color: #fff;
  border-radius: 50%;
}
</style>