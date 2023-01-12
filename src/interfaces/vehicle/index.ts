export interface IReqCreateVehicle {
    color: string;
    type: string;
    price: string;
    plate: string;
    images: string[];
    km: number;
    year: string;
    title: string;
    description: string;
    isActive: boolean;
    userId?: string;
}
