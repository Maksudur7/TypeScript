// as const assertion
// enum

// set of fixed string leteral ek jaigai rakhe

//type UserRoles = "Admin" | "Editor" | "Viewer";

// enum UserRoles {
//     Admin = 'Admim',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }

const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer : "Viewer"
} as const ;

const canEdit = (role: (typeof UserRoles) [keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false
}

const isEditPermissable = canEdit(UserRoles.Admin)
console.log(isEditPermissable);