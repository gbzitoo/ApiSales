function tempo(request, repsonse){
  const dynamicDate = new Date();
  response.json({
    date: dynamicDate.toGMTString();
  });

}

export default tempo;