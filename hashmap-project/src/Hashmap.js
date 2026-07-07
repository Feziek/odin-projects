import LinkedList from "./LinkedList.js";

class HashMap {
  #loadFactor = 0.75;
  #capacity = 16;
  #buckets = Array.from({ length: this.#capacity }, () => new LinkedList());
}
