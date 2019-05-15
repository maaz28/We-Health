export default function() {
  return [
    {
      title: "ADD DATA",
      to: "/addData",
      htmlBefore: '<i class="material-icons">local_library</i>',
      htmlAfter: "" 
    },
    {
      title: "REQUEST",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/request",
    },
    {
      title: "RECIEVED DATA",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/recieve",
    },
    {
      title: "BUY TOKENS",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/buy-token",
    }
  ];
}
