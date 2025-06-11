// تعريف الفانكشن الأساسية
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    // استدعاء البيانات
    const response = await fetch(apiUrl);
    const users = await response.json();

    // مسح الرسالة الافتراضية
    dataContainer.innerHTML = "";

    // إنشاء قائمة المستخدمين
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });

    // إظهار القائمة داخل الصفحة
    dataContainer.appendChild(userList);
  } catch (error) {
    // معالجة الخطأ لو حصل مشكلة في جلب البيانات
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

// استدعاء الفانكشن بعد تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", fetchUserData);
