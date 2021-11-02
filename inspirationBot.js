// Create create Inspiration Robot object
const inspirationBot = {
    // create message pool property
    _msgPool: {
      greeting: [],
      body: [],
      ending: [],
    },
    // Creating getter and setter methods for the message pool
    get greeting() {
      return this._msgPool.greeting;
    },
    set greeting(greeting) {
        this._msgPool.greeting = greeting;
    },
    get body() {
      return this._msgPool.body;
    },
    set body(body) {
        this._msgPool.body = body;
    },
    get ending() {
      return this._msgPool.ending;
    },
    set ending(ending) {
        this._msgPool.ending = ending;
    },
    get courses() {
        return {
          appetizers: this.appetizers,
          mains: this.mains,
          desserts: this.desserts
        }
    }    
}    