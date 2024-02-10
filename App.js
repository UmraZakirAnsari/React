// this is a HTML nested tag 
// but how to create this type of tag using react
// <div id="parent">
//     <div id="child">
//         <h1> I am u h1 tag </h1>
//           <h2> i am a h2 tag</h2>
//     </div>
    // <div id="child">
//         <h1> I am u h1 tag </h1>
//           <h2> i am a h2 tag</h2>
//     </div>
// </div>
const parent=React.createElement("div",
{id:"parent"},[
React.createElement("div",{id:"child"},[
React.createElement("h1",{},"I am a h1 tag"),
React.createElement("h2",{},"I am a h2 tag")
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am a h1 tag"),
    React.createElement("h2",{},"I am a h2 tag")
    ]),
])
const heading=React.createElement("h1",{ id:"heading", xyz:"abc"}," hello word using react ");
// console.log(heading);
console.log(parent);
//  React.createElement is nothing but its create a simple javaScript object
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// {} what is this ---- we can give attribute in this brackets
// like {id: "heading" xyz:"abc"}