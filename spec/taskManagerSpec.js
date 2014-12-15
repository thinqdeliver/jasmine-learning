describe("taskManager", function(){
	var taskManager = null, taskService = null;
	
	beforeEach(function(){
		taskService = new TaskService();
		taskManager = new TaskManager(taskService);

		spyOn(taskService, "loadTask").and.returnValue([{},{},{}]);
	});
	
	it("should be empty initially", function(){		
		expect(taskManager.getTasks()).toEqual({});
	});

	it("should call service to load saved tasks", function(){
		taskManager.loadTask();		
		expect(taskService.loadTask).toHaveBeenCalled();
	});
	
	it("should load saved tasks", function(){		
		taskManager.loadTask();		
		expect(taskManager.getTasks().length).toEqual(3);
	});

});

describe("Some common test rules", function(){

	xit("pending test xit",function(){});
	it("pending test with no function");
	it("pending test with pending()",function(){
		pending();
	});	
});

xdescribe("disabled suite", function(){

});