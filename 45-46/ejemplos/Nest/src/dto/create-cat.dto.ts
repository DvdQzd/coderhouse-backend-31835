import { ApiProperty } from "@nestjs/swagger";

export class CreateCatDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly age: number;

    @ApiProperty()
    readonly breed: string;

    @ApiProperty()
    readonly color: string;
}