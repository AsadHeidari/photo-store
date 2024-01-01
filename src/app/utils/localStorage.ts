type User = {
  name: string;
  family: string;
  userName: string;
  email: string;
  phone: string;
  role: string;
};

type CheckUser = {
  userName: string;
  email: string;
};

export function checkUsers(user: CheckUser) {
  const users = localStorage.getItem("users");
  if (users) {
    const usersArray: User[] = JSON.parse(users);
    const findUser = usersArray.find(
      (element) =>
        element.userName === user.userName && element.email === user.email
    );

    return findUser;
  } else {
    localStorage.setItem("users", "[]");
    return false;
  }
}

export function setNewUser(user: User) {
  const users = localStorage.getItem("users");
  if (users) {
    const usersArray: User[] = JSON.parse(users);
    usersArray.push(user);
    const userString = JSON.stringify(usersArray);
    localStorage.setItem("users", userString);
  }
}

export function setUser(user: User) {
  const userString = JSON.stringify(user);
  localStorage.setItem("user", userString);
}
