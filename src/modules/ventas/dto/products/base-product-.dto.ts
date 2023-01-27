import { IsNotEmpty, IsString } from "class-validator";
import { IsNotEmptyValidationOptions, IsStringValidatorOptions, IsNumberValidatorOptions } from "@shared/validators";
import { ArrayNotEmpty, IsArray, IsNegative, IsNumber, IsPositive } from "class-validator/types/decorator/decorators";


// clase padres el restoson hijos aqui se tendra alas mayorias de validaciones
export class BaseProductDto{
    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString(IsStringValidatorOptions())
    readonly title: string;

    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsNumber(IsNumberValidatorOptions())
    @IsPositive(IsNumberValidatorOptions())
    readonly price: number;

    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString(IsStringValidatorOptions())
    readonly description: string;

    @IsNotEmpty(IsNotEmptyValidationOptions())
    @ArrayNotEmpty(IsNotEmptyValidationOptions())
     readonly image: string[];
     
}












