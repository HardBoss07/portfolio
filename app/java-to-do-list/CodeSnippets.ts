export const hello: string = `
List<ToDoList> allLists = new ArrayList<>();
VBox listGroup = new VBox(10);  // Use VBox to arrange the buttons vertically
Scene mainScene;
String path = "todoLists.json";
SaveSystem saveSystem = new SaveSystem(path);

/* Main View */
@Override
public void start(Stage mainStage) {
    allLists = saveSystem.loadData();
    // Title label
    Label label = new Label("To Do List App");
    label.getStyleClass().add("title-label");

    // Create List Button
    Button createList = new Button("Create a New List");
    createList.setOnAction(e -> showCreateListPopup(mainStage));
    createList.getStyleClass().add("create-list-button");

    // ScrollPane for the listGroup
    ScrollPane scrollPane = new ScrollPane(listGroup);
    scrollPane.setFitToWidth(true);
    scrollPane.setPannable(true);
    scrollPane.setVbarPolicy(ScrollPane.ScrollBarPolicy.NEVER);
    scrollPane.setHbarPolicy(ScrollPane.ScrollBarPolicy.NEVER);

    // Delete list button
    Button deleteList = new Button("Delete a List");
    deleteList.setOnAction(e -> showDeleteListPopup(mainStage));
    deleteList.getStyleClass().add("delete-list-button");

    // Layout for main stage
    VBox mainVBox = new VBox(10);
    mainVBox.getChildren().addAll(label, createList, deleteList, scrollPane);

    HBox mainHBox = new HBox(20);
    mainHBox.setPadding(new Insets(0, 0, 0, 10));
    mainHBox.getChildren().add(mainVBox);

    // Initial Scene setup
    updateListGroup(mainStage);
    Scene scene = new Scene(mainHBox, 350, 600);
    scene.getStylesheets().add(getClass().getResource("style.css").toExternalForm());
    mainStage.setTitle("To Do List App");
    mainStage.setScene(scene);
    mainStage.show();

    mainScene = scene;
}
`;

export const save: string = `
public void saveData(List<ToDoList> list) {
    // Create a JSONArray directly from the list
    JSONArray jsonArray = new JSONArray();

    // Convert each ToDoList object to JSON and add it to the JSONArray
    for (ToDoList toDoList : list) {
        jsonArray.put(toDoList.toJSON());
    }

    try (FileWriter file = new FileWriter(filePath)) {
        // This will overwrite the file
        file.write(jsonArray.toString(2)); // Pretty print with an indent factor of 2
        System.out.println("Data saved to " + filePath);
    } catch (IOException e) {
        System.err.println("Error saving data: " + e.getMessage());
    }
}

// Load data from the file
public List<ToDoList> loadData() {
    List<ToDoList> data = new ArrayList<>();

    try (FileReader fileReader = new FileReader(filePath)) {
        StringBuilder sb = new StringBuilder();
        int content;
        while ((content = fileReader.read()) != -1) {
            sb.append((char) content); // Build the file content as a string
        }
        // Convert the string content to a JSONArray
        JSONArray jsonArray = new JSONArray(sb.toString());
        // Convert each JSON object to a ToDoList object and add it to the list
        for (int i = 0; i < jsonArray.length(); i++) {
            data.add(ToDoList.fromJSON(jsonArray.getJSONObject(i)));
        }
`;

export const toDoList: string = `
public void updateCompletionPercentage() {
    completedTasks.clear();
    for (Task task : allTasks) {
        if (task.getTaskStatus() == TaskStatus.COMPLETED) completedTasks.add(task);
    }
    DecimalFormat df = new DecimalFormat("#.#");
    completionPercentage = Double.parseDouble(df.format((double) completedTasks.size() / allTasks.size() * 100));

    if (Double.isNaN(completionPercentage)) completionPercentage = 0;
}

public void sortList() {
    SortTasks sortTasks = new SortTasks(this.sortingOptions);
    if (this.sortingOptions == null) this.sortingOptions = SortingOptions.UNCATEGORIZED;
    displayTaskList = sortTasks.sortTasks(allTasks);
    System.out.println("Sorted " + allTasks + " to " + displayTaskList + " with " + sortingOptions.toFormattedString());
}

public void addTask(Task task) {
    allTasks.add(task);
    sortList();
}

public void deleteTask(Task task) {
    allTasks.remove(task);
    sortList();
}
`;

export const json: string = `
[{
    "listTitle": "Example Work List",
    "listCategory": "PROFESSIONAL",
    "completionPercentage": 0,
    "completedTasks": [],
    "allTasks": [{
        "taskImportance": "OPTIONAL",
        "taskName": "Clean out drawer",
        "taskStatus": "IN_PROGRESS",
        "taskCategory": "HOUSEHOLD"
    }],
    "sortingOptions": "UNCATEGORIZED",
    "displayTaskList": [{
        "taskImportance": "OPTIONAL",
        "taskName": "Clean out drawer",
        "taskStatus": "IN_PROGRESS",
        "taskCategory": "HOUSEHOLD"
    }],
    "listColor": "#457B9D"
}]

`;