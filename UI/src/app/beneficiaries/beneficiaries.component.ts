import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTable, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PageEvent } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BeneficiaryService } from './services/beneficiary.service';
import { BeneficiaryDialogComponent } from './dialog/beneficiary-dialog/beneficiary-dialog.component';

@Component({
    selector: 'app-beneficiaries',
    templateUrl: './beneficiaries.component.html',
    styleUrls: ['./beneficiaries.component.css']
})
export class BeneficiariesComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    mode = "determinate";
    //Pagination
    length;
    pageSize;
    pageSizeOptions = [100, 500, 1000];
    pageIndex;

    // MatPaginator Output
    pageEvent: PageEvent;

    displayedColumns = ['id', 'name', 'fatherOrHusbandName', 'aadharNo', 'mobileNo', 'address', 'gender', 'caste', 'income', 'disability', 'bankName', 'ifscCode', 'accountNo', 'appliedDate', 'mandalName', 'districtName'];
    dataSource = new MatTableDataSource<Beneficiary>();

    constructor(public _beneficiaryService: BeneficiaryService, public dialog: MatDialog) { }

    ngOnInit() {
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;

        this.findAll(undefined, undefined);
    }

    findAll(pageIndex, pageSize) {

        this.mode = "indeterminate";

        this.dataSource = null;

        let value = {};

        if (pageIndex != undefined && pageSize != undefined) {
            value["pageIndex"] = pageIndex;
            value["pageSize"] = pageSize;
        } else {
            value["pageIndex"] = 0;
            value["pageSize"] = 100;
        }

        this._beneficiaryService.findAll(value)
            .subscribe(
                response => {
                    if (response != undefined && response.length != 0) {
                        this.dataSource = new MatTableDataSource<Beneficiary>(response.content);

                        this.length = response.totalElements;
                        this.pageIndex = response.number;
                        this.pageSize = response.size;

                        this.mode = "determinate";
                    }
                });
    }

    onPaginateChange(event) {
        this.findAll(event.pageIndex, event.pageSize);
    }

    getColumnName(columnKey: string): string {
        let columnName: string = "";
        switch (columnKey) {
            case "id":
                columnName = "#";
                break;
            case "name":
                columnName = "NAME";
                break;
            case "fatherOrHusbandName":
                columnName = "FATHER/HUSBAND";
                break;
            case "aadharNo":
                columnName = "AADHAAR";
                break;
            case "mobileNo":
                columnName = "MOBILE-NO";
                break;
            case "accountNo":
                columnName = "ACCOUNT#";
                break;
            case "address":
                columnName = "ADDRESS";
                break;
            case "gender":
                columnName = "GENDER";
                break;
            case "caste":
                columnName = "CASTE";
                break;
            case "income":
                columnName = "INCOME";
                break;
            case "disability":
                columnName = "DISABILITY";
                break;
            case "bankName":
                columnName = "BANK";
                break;
            case "ifscCode":
                columnName = "IFSC";
                break;
            case "appliedDate":
                columnName = "APPLIED-ON";
                break;
            case "mandalName":
                columnName = "MANDAL";
                break;
            case "districtName":
                columnName = "DISTRICT";
                break;
        }
        return columnName;
    }

    addBeneficiaryDialog(): void {
        let dialogRef = this.dialog.open(BeneficiaryDialogComponent, {
            width: '250px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }
}

export interface Beneficiary {
    id: number,
    name: string,
    fatherOrHusbandName: string,
    aadharNo: string,
    mobileNo: string,
    address: string,
    gender: string,
    caste: string,
    income: number,
    disability: number,
    bankName: string,
    ifscCode: string,
    accountNo: string,
    appliedDate: string,
    mandalName: string,
    districtName: string
}