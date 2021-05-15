import{p as e,a as t,o as l,c as o,b as s,F as a,r as i,w as n,d as m,v as d,t as c,e as p,f as r,g as y,h as u}from"./vendor.c8b5fd3c.js";const h={name:"employee-table",props:{employees:Array},data:()=>({editing:null}),methods:{editMode(e){this.cachedEmployee=Object.assign({},e),this.editing=e.id},editEmployee(e){""!==e.name&&""!==e.email&&(this.$emit("edit:employee",e.id,e),this.editing=null)},cancelEdit(e){Object.assign(e,this.cachedEmployee),this.editing=null}}},E=n();e("data-v-c75d5c9e");const b={id:"employee-table"},f={key:0,class:"empty-table"},g={key:1},k=s("thead",null,[s("tr",null,[s("th",null,"Employee name"),s("th",null,"Employee email"),s("th",null,"Actions")])],-1),v={key:0},S={key:1},j={key:2},C={key:3},U={key:4},w={key:5};t();const F=E(((e,t,n,p,r,y)=>(l(),o("div",b,[n.employees.length<1?(l(),o("p",f," No employees ")):(l(),o("table",g,[k,s("tbody",null,[(l(!0),o(a,null,i(n.employees,(t=>(l(),o("tr",{key:t.id},[r.editing===t.id?(l(),o("td",v,[m(s("input",{type:"text","onUpdate:modelValue":e=>t.name=e},null,8,["onUpdate:modelValue"]),[[d,t.name]])])):(l(),o("td",S,c(t.name),1)),r.editing===t.id?(l(),o("td",j,[m(s("input",{type:"text","onUpdate:modelValue":e=>t.email=e},null,8,["onUpdate:modelValue"]),[[d,t.email]])])):(l(),o("td",C,c(t.email),1)),r.editing===t.id?(l(),o("td",U,[s("button",{onClick:e=>y.editEmployee(t)},"Save",8,["onClick"]),s("button",{class:"muted-button",onClick:e=>y.cancelEdit(t)},"Cancel",8,["onClick"])])):(l(),o("td",w,[s("button",{onClick:e=>y.editMode(t)},"Edit",8,["onClick"]),s("button",{onClick:l=>e.$emit("delete:employee",t.id)}," Delete ",8,["onClick"])]))])))),128))])]))]))));h.render=F,h.__scopeId="data-v-c75d5c9e";const N={name:"employee-form",data:()=>({submitting:!1,error:!1,success:!1,employee:{name:"",email:""}}),methods:{handleSubmit(){this.submitting=!0,this.clearStatus(),this.invalidName||this.invalidEmail?this.error=!0:(this.$emit("add:employee",this.employee),this.$refs.first.focus(),this.employee={name:"",email:""},this.error=!1,this.success=!0,this.submitting=!1)},clearStatus(){this.success=!1,this.error=!1}},computed:{invalidName(){return""===this.employee.name},invalidEmail(){return""===this.employee.email}}},T=n();e("data-v-2172c2c6");const V={id:"employee-form"},$=s("label",null,"Employee name",-1),A=s("label",null,"Employee Email",-1),O={key:0,class:"error-message"},x={key:1,class:"success-message"},D=s("button",null,"Add Employee",-1);t();const _=T(((e,t,a,i,n,c)=>(l(),o("div",V,[s("form",{onSubmit:t[6]||(t[6]=r(((...e)=>c.handleSubmit&&c.handleSubmit(...e)),["prevent"]))},[$,m(s("input",{ref:"first",type:"text",class:{"has-error":n.submitting&&c.invalidName},"onUpdate:modelValue":t[1]||(t[1]=e=>n.employee.name=e),onFocus:t[2]||(t[2]=(...e)=>c.clearStatus&&c.clearStatus(...e)),onKeypress:t[3]||(t[3]=(...e)=>c.clearStatus&&c.clearStatus(...e))},null,34),[[d,n.employee.name]]),A,m(s("input",{type:"text",class:{"has-error":n.submitting&&c.invalidEmail},"onUpdate:modelValue":t[4]||(t[4]=e=>n.employee.email=e),onFocus:t[5]||(t[5]=(...e)=>c.clearStatus&&c.clearStatus(...e))},null,34),[[d,n.employee.email]]),n.error&&n.submitting?(l(),o("p",O," Please fill out all required fields ")):p("",!0),n.success?(l(),o("p",x,"✅ Employee successfully added")):p("",!0),D],32)]))));N.render=_,N.__scopeId="data-v-2172c2c6";const P={name:"app",components:{EmployeeTable:h,EmployeeForm:N},data:()=>({employees:[]}),mounted(){this.getEmployees()},methods:{async getEmployees(){try{const e=await fetch("https://jsonplaceholder.typicode.com/users"),t=await e.json();this.employees=t}catch(e){console.error(e)}},async addEmployee(e){try{const t=await fetch("https://jsonplaceholder.typicode.com/users",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}),l=await t.json();this.employees=[...this.employees,l]}catch(t){console.error(t)}},async editEmployee(e,t){try{const l=await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}),o=await l.json();this.employees=this.employees.map((t=>t.id===e?o:t))}catch(l){console.error(l)}},async deleteEmployee(e){try{await fetch(`https://jsonplaceholder.typicode.com/users/${e}`,{method:"DELETE"}),this.employees=this.employees.filter((t=>t.id!==e))}catch(t){console.error(t)}}}},I={id:"app",class:"small-container"},J=s("h1",null,"Employees",-1);P.render=function(e,t,a,i,n,m){const d=y("employee-form"),c=y("employee-table");return l(),o("div",I,[J,s(d,{"onAdd:employee":m.addEmployee},null,8,["onAdd:employee"]),s(c,{employees:n.employees,"onEdit:employee":m.editEmployee,"onDelete:employee":m.deleteEmployee},null,8,["employees","onEdit:employee","onDelete:employee"])])},u(P).mount("#app");
