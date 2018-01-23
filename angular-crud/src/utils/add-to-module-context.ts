import * as ts from 'typescript';

export class AddImportToModuleContext {
    source: ts.SourceFile;
    relativePath: string;
    classifiedName: string;
}
export class AddToModuleContext {
    source: ts.SourceFile;
    relativePath: string;
    classifiedName: string;
}