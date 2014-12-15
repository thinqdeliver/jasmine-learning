function TaskManager(taskService){
			this.taskService = taskService;
			this.tasks={};
		};
			
		TaskManager.prototype.getTasks= function(){
				return this.tasks;
			};
			
		TaskManager.prototype.loadTask= function(){
				this.tasks = this.taskService.loadTask();
			};
		