(function(Vue) {
	const STORAGE_KEY = "item-vue.js";
	const itemStorage = {
		fetch: function() {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
		},
		save: function(items) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
		}
	};
	Vue.directive("app-focus", {
		inserted(el, binding) {
			el.focus();
		}
	});
	var vm = new Vue({
		el: "#todoapp",
		data: {
			title: "hello",
			items: itemStorage.fetch(),
			currentItem: null,
			filterStatus: "all"
		},
		directives: {
			"todo-focus": {
				update(el, binding) {
					if (binding.value === true) {
						el.focus();
					}
				}
			}
		},
		methods: {
			addItem(event) {
				const content = event.target.value.trim();
				if (!content.length) {
				} else {
					this.items.push({
						id: this.items.length + 1,
						content,
						completed: false
					});
				}
				event.target.value = "";
			},
			removeItem(id) {
				var index = this.items.findIndex((item, index) => item.id === id);
				this.items.splice(index, 1);
			},
			clearCompleted() {
				var comp = this.items.filter(item => !item.completed);
				this.items = comp;
			},
			toEdit(item) {
				this.currentItem = item;
			},
			cancelEdit() {
				this.currentItem = null;
			},
			finishEdit(item, index, event) {
				const content = event.target.value.trim();
				if (!content) {
					this.removeItem(index);
				} else {
					item.content = content;
					this.currentItem = null;
				}
			}
		},
		computed: {
			remaining() {
				const unItems = this.items.filter(function(item) {
					return !item.completed;
				});
				return unItems.length;
			},
			toggleAll: {
				get() {
					console.log("get", this.remaining);
					return this.remaining === 0;
				},
				set(newStatus) {
					console.log("set");
					this.items.forEach(item => {
						item.completed = newStatus;
					});
				}
			},
			filterItems() {
				switch (this.filterStatus) {
					case "active":
						return this.items.filter(item => !item.completed);
						break;
					case "completed":
						const its = this.items.filter(item => {
							return item.completed;
						});
						return its;
						break;
					default:
						return this.items;
						break;
				}
			}
		},
		watch: {
			items: {
				deep: true,
				handler: function(newItems, oldItems) {
					itemStorage.save(newItems);
				}
			}
		}
	});
	window.onhashchange = function() {
		// #/active
		console.log("哈希值改变了", window.location.hash);
		const hash = window.location.hash.substr(2) || "all";
		vm.filterStatus = hash;
	};
	window.onhashchange();
})(Vue);
