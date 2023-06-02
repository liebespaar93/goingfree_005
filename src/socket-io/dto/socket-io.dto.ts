import { IsNumber, IsOptional, IsString } from "class-validator";

export class SocketIoDto {
	@IsString()
	readonly message: string;

	@IsNumber()
	readonly test: number;

	@IsOptional() 
	@IsString({ each: true })
	readonly genres : string[];
}
