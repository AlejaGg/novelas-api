import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from 'class-validator';
import { PaisOrigen } from '../../domain/pais-origen.enum';

export class CreateNovelaDto {
  @IsString() @IsNotEmpty() @MaxLength(180)
  titulo!: string;

  @IsOptional() @IsString()
  sinopsis?: string;

  @IsEnum(PaisOrigen)
  paisOrigen!: PaisOrigen;

  @IsString() @IsNotEmpty() @MaxLength(100)
  protagonista!: string;

  @IsOptional() @IsInt() @Min(1900)
  anioEstreno?: number;
}
