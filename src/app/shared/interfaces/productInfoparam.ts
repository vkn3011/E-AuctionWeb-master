export class ProductInfo {
  ProductId: number;
  SellerId: number;
  ProductName: string;
  ShortDescription: string;
  DetailedDescription: string;
  Category: string;
  StartingPrice: number;
  BidEndDate: Date;
  CreatedDate: Date;
  IsDeleted: boolean = false;
}
