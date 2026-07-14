import AdminPanel from "./AdminPanel";
import LoginForm from "./LoginForm";

const user = {
    username: 'Admin',
    password: 'admin@123'
};

// Method 1: IF-ELSE
export default function ConditionalRendering() {
    let content;
    if (user.username == "Admin" && user.password == "admin@123") {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }
    return (
        <div>
            {content}
        </div>
    );
}

// Method 2: Conditional Operator
// export default function ConditionalRendering() {
//     return (
//         <div>
//             { (user.username == "Admin" && user.password == "admin@13")  ? (
//                 <AdminPanel />
//             ) : (
//                 <LoginForm />
//             )}
//         </div>
//     );
// }

// Method 3: Logical Style 
// export default function ConditionalRendering() {
//     return (
//         <div>
//             {(user.username == "Admin" && user.password == "admin@123") && <AdminPanel />}
//         </div>

//     );
// }




