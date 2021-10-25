const { SyncHook, SyncBailHook, SyncLoopHook, SyncWaterfallHook, AsyncSeriesHook, AsyncParallelHook } = require('tapable')

let count = 0

class LearnTapable {
  constructor () {
    this.hooks = Object.freeze({
      // syncHook: new SyncHook(['name', 'age']),
      // Bail: 在某一个事件的监听函数中有返回值，后续监听的事件就不会执行了
      // syncHook: new SyncBailHook(['name', 'age']),
      // Loop: 如果事件的监听函数返回 true ，该函数就会一直执行(返回undefined就停止执行)
      // syncHook: new SyncLoopHook(['name', 'age']),
      // Waterfall: 当某个事件监听函数返回值不为 undefined 时，这个返回值将作为下一个事件监听函数的第一个实参传递下去
      // syncHook: new SyncWaterfallHook(['name', 'age'])


      // 异步 hook
      // Series: 串行执行
      asyncHook: new AsyncSeriesHook(['name', 'age'])
      // Parallel: 并行执行
      // asyncHook: new AsyncParallelHook(['name', 'age'])
    })

    /* this.hooks.syncHook.tap('event1', (name, age) => {
      // console.log('event1', name, age)
      // return 'a'
      // if (count++ < 3) {
      //   console.log('event1', name, age, count)
      //   return true
      // }
      console.log('event1', name, age)
      return 'data by event1'
    })

    this.hooks.syncHook.tap('event2', (name, age) => {
      console.log('event2', name, age)
    }) */

    /* this.hooks.asyncHook.tapAsync('event1', (name, age, callback) => {
      setTimeout(() => {
        console.log('event1', name, age)
        callback()
      }, 2000)
    })

    this.hooks.asyncHook.tapAsync('event2', (name, age, callback) => {
      setTimeout(() => {
        console.log('event2', name, age)
        callback()
      }, 2000)
    }) */

    this.hooks.asyncHook.tapPromise('event1', (name, age) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('event1', name, age)
          resolve()
        }, 2000)
      })
    })

    this.hooks.asyncHook.tapPromise('event2', (name, age) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('event2', name, age)
          resolve()
        }, 2000)
      })
    })
  }

  emit () {
    // this.hooks.syncHook.call('ronnie', 18)
    // this.hooks.syncHook.call('mark', 20)

    // this.hooks.asyncHook.callAsync('ronnie', 18, () => {
    //   console.log('事件执行完成')
    // })

    this.hooks.asyncHook.promise('mark', 20).then(() => {
      console.log('事件执行完成')
    })
  }
}

const lt = new LearnTapable()
lt.emit()