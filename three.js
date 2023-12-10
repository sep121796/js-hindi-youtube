const arr=[1,2,3,4,5,6,7]

for(const num of arr){
    console.log(num)
}

const Object={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"sawift by apple"
}

for (const key in Object){
    console.log(`${key} shortcut is for ${Object[key]}`)
}