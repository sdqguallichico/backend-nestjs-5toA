import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products',{schema:'ventas'} )


export class ProductEntity{
    @PrimaryGeneratedColumn('venta')
    id:string;

    @CreateDateColumn({
        name: 'created_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createdAt:Date;

    @UpdateDateColumn({
        name: 'updated_date',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name: 'updated_date',
        type:'timestamptz',
        nullable:true ,
    })
    deleteAt:Date;

    //relaciones
    @ManyToOne(() => CategoryEntity, (category) => category.product)
    category: CategoryEntity;


    @Column('varchar',{
        name:'title',
        unique:true,
        comment: 'titulo del producto',
    })

    title:string;

    @Column('number',{
        name:'price',
        comment: 'precio del producto con dos decimales',
    })

    price:number;

    @Column('varchar',{
        name:'description',
        nullable:true,
        comment: 'descripcion del producto ',
    })

    description:string;

    // @Column('boolean',{
    //     name:'estate',
    //     comment: 'estado del producto ',
    // })

    // estado:boolean;


    // @Column('enum',{
    //     name:'language',
    //     enum:languageTypeEnum,  
    //   })
    //   language:LanguageTypeEnum;

    @BeforeInsert()
    @BeforeUpdate()
    async setTitle(){
        if(!this.title){
            return;
        }
        this.title = this.title.toUpperCase();
    }
    // setEmail(){
    //     if(!this.email){
    //         return;
    //     }
    //     this.email = this.email.toLowerCase().trim();
    // }


    // async hashPassword(){
    //     if(!this.password)
    //     return;
    // }
    // this.password = await Bcrypto.hash(this.password, 12);

    // completar los dos campos que faltan y hacer de categoria

}