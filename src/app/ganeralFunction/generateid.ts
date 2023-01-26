export function generateId(table) {
  var max: number;
  if (table.length == 0) {
    max = 0;
  } else {
    max = table[0].id;
    for (let i = 1; i < table.length; i++) {
      if (table[i].id > max) {
        max = table[i].id;
      };
    };
  };
  return max;
};

export function deleteObject(id, key) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  var pos: number;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      pos = i;
      break;
    }
  }
  objects.splice(pos, 1);
  localStorage.setItem(key, JSON.stringify(objects));
};

export function searchObjectById(id, key) {
  var objects = JSON.parse(localStorage.getItem(key) || "[]");
  var object = {};
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id == id) {
      object = objects[i];
    };
  };
  return object;
};