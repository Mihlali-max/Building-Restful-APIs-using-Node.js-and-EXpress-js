const routes = (app)=>{
    app.route('/contact')
    .get((req,res)=>
    res.send('Get request successfully'))

    .post((req,res) =>
    res.send('POST request successful'));

    app.route('/contact/:contactID')
    .put((req,res)=>
    res.send('PUT request successfully '))

    .delete((req,res)=>
    res.send('Delete request successfully '))


}
export default routes;