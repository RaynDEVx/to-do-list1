function addTask() {
    // الحصول على قائمة المهام
    const taskList = document.getElementById("taskList");
  
    // إنشاء عنصر جديد للقائمة
    const newTask = document.createElement("li");
  
    // إضافة خط فاصل
    const hr = document.createElement("hr");
  
    // إضافة صندوق اختيار
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
  
    // إضافة حقل نصي
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.placeholder = "write your task here";
  
    // إضافة العناصر إلى المهمة الجديدة
    newTask.appendChild(hr);
    newTask.appendChild(checkbox);
    newTask.appendChild(textInput);
  
    // إضافة المهمة الجديدة إلى القائمة
    taskList.appendChild(newTask);
  }