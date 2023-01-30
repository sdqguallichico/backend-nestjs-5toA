import { IsNotEmpty, IsString } from "class-validator";
import { IsNotEmptyValidationOptions, IsStringValidatorOptions} from "@shared/validators";



// clase padres el restos on hijos aqui se tendra alas mayorias de validaciones
export class BaseCategoryDto{
    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString(IsStringValidatorOptions())
    readonly title: string;


    @IsNotEmpty(IsNotEmptyValidationOptions())
    @IsString(IsStringValidatorOptions())
    readonly description: string;

    
     
}












