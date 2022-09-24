# -
小白一枚，勿嘲笑。。。
#include<stdio.h>
#include<math.h>
int main(){
	double x;
	double s;
	int n=1;
	double sum=1;
	double m;
	int i=1;
	scanf("%lf",&x);
	while (i<=2000){
		m=sum;
		if(fmod(sum,x)==0){
			while(m>9){
				m=m/10;
				n++;
			}
			break;
		}else{
			sum=sum*10+1;
		}
		i++;
	}
	s=sum/x;
	printf("%.0f %d",s,n);
	return 0;	
	}
