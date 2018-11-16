using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2D_Arrays
{
    class Program
    {
        static void Main(string[] args)
        {
            // code to test
            int[][] input = new int[6][];
          ////  input[0]= new int[] { 1, 1, 1, 0, 0, 0 };
          //  input[1] = new int[] { 0, 1, 0, 0, 0, 0 };
          //  input[2] = new int[] { 1, 1, 1, 0, 0, 0 };
          //  input[3] = new int[] { 0, 0, 2, 4, 4, 0 };
          //  input[4] = new int[] { 0, 0, 0, 2, 0, 0 };
          //  input[5] = new int[] { 0, 0, 1, 2, 4, 0 };
             input[0] = new int[] {-1,-1, 0, -9, -2, -2};

            input[1] = new int[] { -2, - 1 ,- 6 ,- 8, - 2 ,- 5 };
            input[2] = new int[] { -1 ,- 1, - 1, - 2, - 3, - 4 };
            input[3] = new int[] { -1, - 9, - 2, - 4, - 4, - 5 };
            input[4] = new int[] { -7 - 3 - 3 - 2 - 9 - 9 };
            input[5] = new int[] { -1 - 3 - 1 - 2 - 4 - 5 };
            var result = MaxHourGlass(input);
            Console.WriteLine(result);
            Console.ReadKey();
;
        }
        




      static int MaxHourGlass(int[][] input)
        {
            //calculate total hourglass
            int MaxSum = MaxHorizontal(0,input);
            for (int k = 0; k <= input.Length/2; k++)
            {
                int tempSum = MaxHorizontal(k, input);

                MaxSum = Math.Max(tempSum, MaxSum);
            }

            return MaxSum;
          }
        static int CalculateHourGlass(int i, int j, int[][] input)
        {
            //sum all elements in an hourglass
            int hourglassSum = 0;
           
                hourglassSum = input[i][j] + input[i][j + 1] + input[i][j + 2] + input[i + 1][j + 1] + input[i + 2][j] + input[i + 2][j + 1] + input[i + 2][j + 2];

           

            return hourglassSum;

        }


       static int MaxHorizontal(int j, int [][] input)
        {// get maximum hourglass sum along the horizontal
            int MaxSum = CalculateHourGlass(0,j,input);
            for(int k = 1; k <= input.Length/2; k++)
            {
                int tempSum = CalculateHourGlass(k, j, input);

                MaxSum = Math.Max(tempSum, MaxSum);

            }

            return MaxSum;
        }
    }
}
