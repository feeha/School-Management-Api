import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Report } from './../interfaces/report.interface';
import { ReportDto } from './../dtos/report.dto';

@Injectable()
export class ReportService {
    constructor(@Inject('REPORT_MODEL') private readonly reportModel: Model<Report>) { }

    async create(reportDto: ReportDto): Promise<Report> {
        const createReport = new this.reportModel(reportDto);
        return await createReport.save();
    }
    async findAll(): Promise<Report[]> {
        return await this.reportModel.findAll().exec();
    }
    async find(id: string): Promise<Report> {
        return await this.reportModel.find(id).exec();
    }
    async update(id: string, reportDto: ReportDto): Promise<Report> {
        return await this.reportModel.findByIdAndUpdate(id, reportDto);
    }
    async delete(id: string, reportDto: ReportDto): Promise<Report> {
        return await this.reportModel.findByIdAndRemove(id, reportDto);
    }
}