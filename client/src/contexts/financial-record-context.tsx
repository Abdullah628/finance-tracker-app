import { createContext, useContext, useState } from "react";

interface FinancialRecord {
  id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

interface FinancialRecordContextType {
  records: FinancialRecord[];
  addRecord: (record: FinancialRecord) => void;
  // updateRecord: (id: string, newRecord: FinancialRecord) => void;
  // deleteRecord: (id: string) =>void;
}

export const FinancialRecordsContext = createContext<
  FinancialRecordContextType | undefined
>(undefined);

export const FinancialRecordsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);

  const addRecord = async(record: FinancialRecord) => {
    const res = await fetch("http://localhost:3001/financial-records", {
      method: "POST",
      body: JSON.stringify(record)
    })

    try{
      if(res.ok){
        const newRecord = await res.json();
        setRecords((prev)=> [...prev, newRecord]);
      }
    } catch(err){
      console.log(err);
    }
    
  };
  return (
    <FinancialRecordsContext.Provider value={{ records, addRecord }}>
      {" "}
      {children}
    </FinancialRecordsContext.Provider>
  );
};

export const useFinancialRecords = () => {
  const context = useContext<FinancialRecordContextType | undefined>(
    FinancialRecordsContext
  );

  if(!context){
    throw new Error("useFinancialRecords must be used within a FinancialProvider");
  }

  return context;
};
