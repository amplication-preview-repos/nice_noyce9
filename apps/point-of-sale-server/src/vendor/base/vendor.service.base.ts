/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Vendor as PrismaVendor,
  Bill as PrismaBill,
  Payment as PrismaPayment,
} from "@prisma/client";

export class VendorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.VendorCountArgs, "select">): Promise<number> {
    return this.prisma.vendor.count(args);
  }

  async vendors(args: Prisma.VendorFindManyArgs): Promise<PrismaVendor[]> {
    return this.prisma.vendor.findMany(args);
  }
  async vendor(
    args: Prisma.VendorFindUniqueArgs
  ): Promise<PrismaVendor | null> {
    return this.prisma.vendor.findUnique(args);
  }
  async createVendor(args: Prisma.VendorCreateArgs): Promise<PrismaVendor> {
    return this.prisma.vendor.create(args);
  }
  async updateVendor(args: Prisma.VendorUpdateArgs): Promise<PrismaVendor> {
    return this.prisma.vendor.update(args);
  }
  async deleteVendor(args: Prisma.VendorDeleteArgs): Promise<PrismaVendor> {
    return this.prisma.vendor.delete(args);
  }

  async findBills(
    parentId: string,
    args: Prisma.BillFindManyArgs
  ): Promise<PrismaBill[]> {
    return this.prisma.vendor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bills(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.vendor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }
}
