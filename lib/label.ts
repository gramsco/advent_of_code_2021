function label(whatToSay: string, whatToDo?: () => unknown) {
  //eslint-disable-next-line
  console.log(`-- ${whatToSay} --`);
  if (whatToDo) whatToDo();
}

function result(what: unknown) {
  label(`RESULT : ${what}`);
}

export { label, result };
