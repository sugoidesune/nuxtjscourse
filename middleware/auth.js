export default function (context) {
    console.log('IS THIS SERVER SIDE?')
    if(!context.store.getters.isAuthenticated){
        context.redirect('/admin/auth')
    }
  }
  