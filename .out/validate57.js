function validate57(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
let valid0 = false;
if(data && typeof data == "object" && !Array.isArray(data)){
valid0 = true;
var valid1;
if(data.foo !== undefined){
let data0 = data.foo;
const _errs0 = errors;
if(!(typeof data0 == "number" && isFinite(data0) && !(data0 % 1) && data0 >= -2147483648 && data0 <= 2147483647)){
validate57.errors = [{instancePath:instancePath+"/foo",schemaPath:"/properties/foo/type",keyword:"type",params:{type: "int32", nullable: false},message:"must be int32",schema:"int32",parentSchema:schema29.properties.foo,data:data0}];
return false;
}
var valid1 = _errs0 === errors;
}
else {
valid1 = false;
validate57.errors = [{instancePath,schemaPath:"/properties/foo",keyword:"properties",params:{error: "missing", missingProperty: "foo"},message:"must have property 'foo'",schema:schema29.properties,parentSchema:schema29,data}];
return false;
}
if(valid1){
var valid2;
if(data.bar !== undefined){
let data1 = data.bar;
const _errs1 = errors;
if(!(typeof data1 == "string")){
validate57.errors = [{instancePath:instancePath+"/bar",schemaPath:"/optionalProperties/bar/type",keyword:"type",params:{type: "string", nullable: false},message:"must be string",schema:"string",parentSchema:schema29.optionalProperties.bar,data:data1}];
return false;
}
var valid2 = _errs1 === errors;
}
else {
valid2 = true;
}
if(valid2){
for(const key0 in data){
if((key0 !== "foo") && (key0 !== "bar")){
validate57.errors = [{instancePath:instancePath+"/" + key0.replace(/~/g, "~0").replace(/\//g, "~1"),schemaPath:"",keyword:"properties",params:{error: "additional", additionalProperty: key0},message:"must NOT have additional properties",schema:schema29.properties,parentSchema:schema29,data}];
return false;
break;
}
}
}
}
}
if(!valid0){
validate57.errors = [{instancePath,schemaPath:"/properties",keyword:"properties",params:{type: "object", nullable: false},message:"must be object",schema:schema29.properties,parentSchema:schema29,data}];
return false;
}
validate57.errors = vErrors;
return errors === 0;
}
