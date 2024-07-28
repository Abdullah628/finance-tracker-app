import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from "./financial-record-form.tsx";

const Dashboard = () => {
    const {user} = useUser();
    return (
        <div>
            <div>
                <h1>Welcome {user?.fullName}! Here Are Your Finances:</h1>
                <FinancialRecordForm/>
            </div>
        </div>
    );
};

export default Dashboard;