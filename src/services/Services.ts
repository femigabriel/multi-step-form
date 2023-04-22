export type AuthListId = {
    title: string;
    id: number;
    item: React.ReactNode;
    step: string;
};
export  type AuthList = {
    title: string
    description: string
}
export type PaymentPlanList = {
    title: string;
    id: number;
    amount: number;
    icon: any;
   
};
export type AddInfoList = {
    title: string;
    id: number;
    description: string;
    amount: number
};
export type SummaryList = {
    title: string;
    id: number;
    description: string;
    amount: string;
};