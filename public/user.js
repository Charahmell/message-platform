class User {
    constructor(name, email, profilePicture, id) {
        this.name = name;
        this.email = email;
        this.profilePicture = profilePicture;
        this.id = id
        
    }

    saveuser(){
        let User = { 
            name:this.name,
            email:this.email,
            profilePicture:this.profilePicture,
            id:this.id
        }

        localStorage.setItem('user', JSON.stringify(User))
    }

    logoutUser(){
        localStorage.removeItem('user')
    }
    deleteUser(){
        localStorage.clear()
    }
}

export default User;