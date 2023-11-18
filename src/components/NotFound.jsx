const NotFoundContact = () => {
    return (
      <div className="flex h-[60vh] items-center justify-center gap-4">
        <div>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FFFFFF/user-not-found.png" alt="user-not-found"/>
        </div>
        <h3 className="text-2xl font-semibold text-white"> Contact Not Found</h3>
      </div>
    );
  };
  
  export default NotFoundContact;