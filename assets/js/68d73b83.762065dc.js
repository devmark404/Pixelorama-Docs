"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[646],{7894:(e,A,s)=>{s.r(A),s.d(A,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var n=s(4848),r=s(8453);const t={id:"brush",title:"Brush",sidebar_label:"Brush"},a=void 0,i={id:"concepts/brush",title:"Brush",description:"Brushes can be used to easily draw complex shapes and patterns, without having to copy and paste them. The user can also change their color and size.",source:"@site/docs/concepts/brush.md",sourceDirName:"concepts",slug:"/concepts/brush",permalink:"/Pixelorama-Docs/concepts/brush",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/brush.md",tags:[],version:"current",lastUpdatedBy:"Emmanouil Papadeas",lastUpdatedAt:171639479e4,frontMatter:{id:"brush",title:"Brush",sidebar_label:"Brush"},sidebar:"docs",previous:{title:"Transforming",permalink:"/Pixelorama-Docs/user_manual/transforming"},next:{title:"Cel",permalink:"/Pixelorama-Docs/concepts/cel"}},o={},h=[{value:"Brush Types",id:"brush-types",level:2},{value:"Making Your Own Custom Brushes",id:"making-your-own-custom-brushes",level:2},{value:"File Brushes",id:"file-brushes",level:3},{value:"Random Brushes",id:"random-brushes",level:3},{value:"Project Brushes",id:"project-brushes",level:3}];function l(e){const A={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.p,{children:"Brushes can be used to easily draw complex shapes and patterns, without having to copy and paste them. The user can also change their color and size."}),"\n",(0,n.jsx)(A.p,{children:"To access brushes, select the pencil tool and click on the white square."}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Brush selection",src:s(7046).A+"",width:"247",height:"220"})}),"\n",(0,n.jsx)(A.p,{children:"Then, the different brushes are shown."}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Brush types",src:s(7283).A+"",width:"277",height:"336"})}),"\n",(0,n.jsx)(A.h2,{id:"brush-types",children:"Brush Types"}),"\n",(0,n.jsxs)(A.p,{children:["Pixelorama comes with three default brushes, the usual pixel/square brush, a hollow circle and a filled circle brush. These brushes are based on algorithms, while all of the other brushes as of right now are based on image data. The main difference is that the image-based brushes are scaled the same way that images are being scaled, which may not always have the result we desire. The image-based brushes are also divided into two types, File brushes and Project brushes. File brushes are stored as external ",(0,n.jsx)(A.code,{children:".png"})," files, while project brushes are stored in the ",(0,n.jsx)(A.a,{href:"project",children:"project"})," itself. File brushes can also be Random brushes. Each time you draw using a random brush, the result will be something different!"]}),"\n",(0,n.jsx)(A.p,{children:'Image-based brushes will also have one extra option in the tool settings; a "Brush Color From" slider which goes from 0 to 100. If it\'s set to 0, the resulting color(s) of the brush will come entirely from the image data themselves. Otherwise, if set to 100, the brush color will come from the currently selected color. This setting is important to have because, since image-based brushes rely on image data, this means that they also get to keep the original colors of the image data.'}),"\n",(0,n.jsx)(A.h2,{id:"making-your-own-custom-brushes",children:"Making Your Own Custom Brushes"}),"\n",(0,n.jsx)(A.h3,{id:"file-brushes",children:"File Brushes"}),"\n",(0,n.jsxs)(A.p,{children:["Pixelorama gives you the option to create your own custom brushes, which you can later use to draw. There are two brush types, File and Project brushes. File brushes are ",(0,n.jsx)(A.code,{children:".png"})," files saved in the ",(0,n.jsx)(A.code,{children:"pixelorama_data/Brushes"}),' directory. They are available for all projects. To create a "File" custom brush, all you need to do is create your brush and save it as a ',(0,n.jsx)(A.code,{children:".png"})," file in the ",(0,n.jsx)(A.code,{children:"pixelorama_data/Brushes"}),' directory. They will be found on the "File" tab.']}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"File brushes tab",src:s(7258).A+"",width:"288",height:"307"})}),"\n",(0,n.jsx)(A.h3,{id:"random-brushes",children:"Random Brushes"}),"\n",(0,n.jsxs)(A.p,{children:["To make a random brush, save your sprites as multiple ",(0,n.jsx)(A.code,{children:".png"})," files, with ",(0,n.jsx)(A.code,{children:'"~"'})," at the beginning of their filename, and save them in the same sub-directory. For example, if you want to save a grass random brush, you can create a ",(0,n.jsx)(A.code,{children:"pixelorama_data/Brushes/Grass"})," directory, and name the files something like ",(0,n.jsx)(A.code,{children:"~Grass1.png"}),", ",(0,n.jsx)(A.code,{children:"~Grass2.png"}),", ",(0,n.jsx)(A.code,{children:"~Grass3.png"}),", ",(0,n.jsx)(A.code,{children:"~Grass4.png"}),", and so on. The more files you add, the more variation (random values) your random brush will have."]}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Random brush files",src:s(2536).A+"",width:"518",height:"76"})}),"\n",(0,n.jsx)(A.h3,{id:"project-brushes",children:"Project Brushes"}),"\n",(0,n.jsxs)(A.p,{children:["Project brushes are project-dependent, which means that they're not available for all projects. They are saved inside ",(0,n.jsx)(A.code,{children:".pxo"})," files. To create a Project brush you can ",(0,n.jsx)(A.a,{href:"../user_manual/selecting",children:"select"})," the part of the drawing you want to save as brush, and press ",(0,n.jsx)("kbd",{children:"Control + B"}),' or go to Edit, New Brush. They will be found on the "Project" tab.']}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{alt:"Project brushes tab",src:s(4684).A+"",width:"276",height:"371"})})]})}function d(e={}){const{wrapper:A}={...(0,r.R)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},7046:(e,A,s)=>{s.d(A,{A:()=>n});const n="data:image/png;base64,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"},7283:(e,A,s)=>{s.d(A,{A:()=>n});const n=s.p+"assets/images/brush_types-be03b935bcc4698dab71273c1624a29e.png"},7258:(e,A,s)=>{s.d(A,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAEzCAIAAAAeo0niAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACLmSURBVHhe7d0JeEzn/gfwbIhEJBIhhEbsaqm1doKraie9mkbDlSL2WqJ/3KiLKGkstQdJk15L7Wu5qu1VFEGVa1+KCA2SiCySICTz/5n3zXEyWyaZeTOZ+H6e86Tvec85cyY637zLnJljWblyZQsAEMOK/xcABEDAAARCwAAEQsAABMozyZGVlcVLAFAopUuX5iUl1YCVK1eOrwBAAaWnp6sEDF1EAIEQMACBEDAAgXSNwag3aWlpyVcAQBNKjUKhYOWCjcGQLoB8lSpVipc00dWClSlThn7e+mw7WwUAudqRg1jhxYsXrIBZRIAihYABCISAAQiU/xgMAHTDGAzANBAwAIEQMACBEDAAgRAwAIEQMACBEDAAgRAwAIEQMACBEDAAgRCwt8KSJUv++c9/8hUoQghYUaMX+oFcP/zwQ2Rk5MSJE11dXflm4/nwww87duzIV8BEEDATiI+P/z+lGTNmbN26tXHjxkuXLi1fvjzfbCStW7du0aIFXwETQcBM4Pnz51eULl++fOjQoeDgYCcnJ6O3NnPmzKHc8hUwEQTM9J48eUI/bW1t2WqvXr3Wrl27a9eulStXdunShVVu2rRp+PDhkydP3rZtGzV6gYGB0v5WVlY+Pj7ffvvt7t27V61a1alTJ1aPcVdxgICZEmWjSpUq48ePVygU58+fpxpfX99hw4bt2bOHsnHkyBEKUtu2bdnOAwcOzMzMXLBgAWWMgte/f39WP2rUqEGDBu3duzcoKCg6Opp6nm3atGGbwOQQMBPw8PCQJjkiIiLq1au3aNGiO3fulC1blqISGRl58ODB69ev79ix47fffuvTpw87isrUslEOd+7cefXq1fr161Olg4NDz549N2/evG/fPqrcuHHjqVOnqIYdAiaHgJmANMlBDZS/EjVWVP/OO++UKVNmwoQJLH6E+nvUxLGjHj9+zAqEmjJKIxUoq9bW1jScY/UkNDQ0JCSEr4CpIWAmIE1yUDOVkJAgfW2ljY0N/Vy2bBllTDJnzhy2VSP1767Mysp69uwZXwFTQ8CKkfv37+fk5FSrVo26i0ysEt+syb179+iQd999l69bWFB7OGXKFL4CpoaAFSNpaWk0lBo4cOA//vGPhg0bUv9w8eLFfn5+fLMmqamphw4dGjx4cN++fRs0aODj4+Pt7X327Fm+GUwNASteIiIioqKiOnToMH/+/JEjR1IfcteuXXybFmFhYXv27Pnoo49o6EWZXLhw4bFjx/g2MDV8bRuAofC1bQCmgYABCISAAQiEgAEIhIABCISAAQiEgAEIhIABCISAAQiEgAEIhIABCFSAaxH//PNPXjKGOnXq8FJezZo14yXj+eWXX3gJwEhcXFx4yfBrESlaxk0X0fiYItIFIEJSUhIv6YQuIoBA+QfM6G2XnNAHBzAEDZfGjBkzbtw4Ozs7XlVwaMEANKB0jRw50sPDo3r16hQzBwcHvqGAEDAAVSxdlStXfvjwYVxcnKura0BAQOEyhoAB5CFPV0RExLfffssyRpWFyBgCBpDH0KFDpXRlZGRkZmZSxh48eFCpUqVhw4bxnfSGgAHkkZWVFRMTw9LFaihjtHrnzh3axGr0l/8bzaIn+uTvOAt6HwxvNIMI0nvN+NIbANNAwIqvRo0affPNN7t3746Kiho4cCCrrFq1KisYolatWj/88ANuz1cEELBiysHB4V//+hely8fHZ+7cuX379vXy8nJ0dAwNDS1VqhTfqVAsLS3Hjh0r9WpAKKMFjP63qePboOCqVKmSk5Nz7NgxNuYODw+nytTUVD8/v5cvX7J9CqdHjx7x8fFxcXF8HURCC1ZM3b17Ny0tbeLEiW5ubrQaHR195MiR8uXLHzhwgFb79+/P7m/EdO3alSpbtmy5Zs2anTt3fvXVV66urjQE37hxI7vLkYQaxo8//jgiIoKvy3h4eHz33XczZszYsWPHqlWr6tatS5WdOnVau3YttZn29vYbNmxo3rw52xn0hIAVU9RwBQYG0s9ly5bRSKx169Z8g9LevXt7K61evfrmzZvHjx9nVxssWLDgk08++eOPP0aNGvXkyRPqW6rcysjf359GX+ymteqcnJwOHTo0ZMiQkydPfvHFF9QHoSb09u3b9JjDhw8/ceLEuXPn+K6gHwSs+KIWLCwsjPqEe/bsoaZMupeshNoTb29vShHlsEWLFu7u7pQ32pnCQO2PQqGg7PFdlerXr1+vXr19+/bxdTUZGRkUIcrk999/X7FiRWdnZ6qk1qxLly7vvvtuZGQk2w30h4AVU61ataLBEhVoxHX06FFqWFQCVqNGjUmTJgUHBycnJ9MqxYmywZo1MnToULab3IABA+goChj1KmvXrk3JHDRoEN+WF7VdVlZWbBRN/UMqWyuxraA/BKyYyszMpIaI2qXSpUvTMIwKMTExfJuFRYUKFWbNmrV8+XIaqrGaS5cuNWzYsHPnzra2ttRSdejQgeJBKWJbmZCQEJ6/3r1v3bpFj7B9+3a+TYkGWtQq0rDNx8cnMTGRfaaQYnzw4MFTp06NGTOG7Qb6Q8CKqStXrtDQa9iwYdu2bQsNDT1//jyNu/g2C4sPPvigcuXKc+bMYZMcFMUHDx58/fXXFIwtW7ZMmDCBupc0KqMdCnQPKupqUvY2bNjQsWPHhQsXUqtIqy4uLjt27KDKBg0aUG75rqAfXCoFnIeHx/z58z/99FO+DvnBpVIAJoaAAQiEgAEXGxuL/iEZMWLEqFGj7O3t+bqSnZ1dQEAA1fN1vSFgAHnQIMrT05NiJmWM0kWrNWvWVBlf6QMBA8hj/fr18fHxVapUYRmjdA0fPrxq1aoJCQnfffcd30lvCBhAHunp6eHh4VLGKF3u7u6JiYlU+fTpU76T3hAwAFXyjLF0rVu3rhDpIggYgAYsY7Gxsffv3w8LCytcuoheN38Q916zyi0g8EYzmBG80QxgYgW4fdHu3bt5yRikL5lQUa9ePV4ynjNnzvASgJE4Ojryks4WrAABAwBtKDsKhQJdRAAhtH0TEQIGYATavuIJAQMQCAEDEAgBAxAIAQMQCAEDEAgBAxCoMG80W1tbR0VFUSE7O/vBgwf79u07ffo026SufPnyEyZM8PT0DAoKio+P57U6OTg4rFq1SuM3+xHp7CQ1NfXkyZNbtmxRKBSsRn/VqlWbNm0aPTe+DmCYFy9eGPON5kmTJgUEBGzevHnw4MHqXzor6d69O5117NixCQkJvKog5s6d27RpU74iQ2enBAYHBzdr1qxNmza8FqCYMaiL+PLly8uXL69fv17bhYWkYsWKN27cYBeS8CrjodBev36d2iK+DlDMGGEMRhlzc3NjN2Bv0qRJSEhIeHg49b5cXFxGjx7dvn17auKoIbK0tBwwYMCSJUsiIiJoK7tWkrqOVKN8GAtqqWg3VmbocWrUqDFlypQ+ffrwqrzc3d3pjCxjK1eupGYtNDRU22P27dt3xYoVa9eupYbXxsaGaqi36e/vv2bNmkWLFkkfnFH5FahG/UAAPRkhYNT1pAbK3t7e2dnZz8+PXotjxoy5ePEilem1S2OkTZs2zZo1i0Z31FekTh11FxMTE7VlRm7kyJF3796ltOzfv59X5Vq6dCm1nAsWLIiLi7t69SrV0BOIjo6ePXs220EFDTUpJ/PmzZs6dSqVO3XqRJV2dnbUutIw7OzZs/3796ca9V9B44EAejJCwGxtbWlgl5GRQX/7qSmjF31kZKSvr2/NmjX5HkpPnz6lFiMoKIiaAi8vLycnJ76hUNgYbNy4cdnZ2d7e3lRD6T19+nRmZibbQUVSUtKDBw8CAwNp5+3btx8+fJgq6SlR/qmjSxFlz0f9V9B4IICejBCw9957Lz4+nn2mmrqL9LpnJk6cyHZgatWq1bt37+XLl48YMYLaNFZJAzNtV0nqg0565swZdqs4ibbHpI7funXrqPGkjqvK7bbk1H8FPQ8EUGdQwMqUKdOsWTPqR7HPYl67do1e623btqX62rVrt2rViu3GlC1b9tWrV9TC0MBG2pSSkkKDMRpB0U+Nk4F0SIUKFbTdOIeOateunXSHEUbjY1LTRN082nT06NFbt25pmxdR/xX0PBBAI2v5G1/U3ZLP4msb0FtZWQ0YMODDDz/s1atX9erVd+7cSYMfqqde4l9//UVdKR8fH3p10sDm8ePHLVu2pFfn7du3qQWoWrXqsGHDmjdvTp0uitmxY8eeP3/OZho6d+785MkTejK//vorvbiprWOhLVWq1ODBg6kXJ30viHT2gQMH0lH37t3bsmULjaY6dOhw8OBB2kHjYz58+JC6stR40iMnJydv3bqVAi8dQoOrhg0bUvdP/Ve4dOmSyoEG3iIZSiqKT1ZWlkpjgE80AxiHkd9oBoB8IWAAAiFgAALpOwZzdXXlJQDIKzExkX5qHINhkgPAODDJAVDUEDAAgRAwAIEQMACBCjjJUdbJwkpYJnNyLJ6l8HJe2dnZvCSGtmsdTXVeMEcGzSJaVqpl17DLq7THihxRrzlLK2ub8hUzr/yqSLjNq5RPKTMz05Ar7vWhUCjs7Ozk/zSmOi+YL4MCZt9lxKN93/AVkdz6Tc74NYKvKC+NL5o/89RYyT+iZqrzgvkyKGBlWgx4fGSDv78/X88VExvDS5p4enjykibqxx45fKSi15AXV4+wviK9+OgZW1lZ5XverZu38pIm06dP5yUljefNycmh352FylTnBbNm0Ptg4nqGKl6fSNwwD6Bo4aUMIBACBiCQvmOw0s36Jh37vgjGYC6dBmfdPGGR8YRWdY+F5OMfH18fXlJSOW9ISAgvKcdF+Y6F9D+v/vQ5L5g1gyY5WMC8unrx9VwFjZCc+rFRUVEaA6bxvCqx4SUllfOqRFHjeTUGLN/z6k+f84JZM2iSAwAKwfxaMKk5Umm15HScV+Ph+rRghesZqtNxXjBraMEAihoCBiAQAgYgkHmMweR37mMz8oafVz4ZSP8IGsdget4xsNBUzgtmDWMwgKImJGDUODBbN2+VFr4N4G2CFgxAICGXSmlsr9TftlI/VtulUvKxEHucgo7u5Nix8ieJMRgYDmMwgKKGgAEIhIABCISAAQgkJGA+vj5smS7DtwG8TczvA5chuVdgsEs6NNJxXo2H6/OBS+lAA+k4L5g1zCICFDUEDEAgBAxAIHwnx2v6fKKZUTmv/vQ5L5g1jMEAihoCBiCQGXcReUlJd7dNZUI/366aqc4LZg1dRICihoABCKRvwCytiqgP8/pEOTl8BcDM6TsGww34BFE5L5gvjWMwfQOGW8iKgFvIliQGBYzDTdCNCpOHJYkxAgYAWmCaHqCoIWAAAiFgAAIhYAACIWAAAiFgAAKpTtP/nJzMVwCg4HrLAkXQggEIpLkFG1i9Ov3EG80A+tty6xb9RAsGUHQQMACBEDAAgRAwAIEKM8lhbW0dFRXFV5QWLVp08eJFNze3R48eOTg4rFq1aujQoXybJvJHSE1NPXny5JYtWxQKBavRX7Vq1aZNmzZhwgS+DmA6Rp7kmDRpEqWIoXRRroKCgmxsbPhmPbBHCA4ObtasWZs2bXgtQAlitC7i06dPqSV59eoVX9dbQkLC9evXqS3i6wAliNECRi3Y+vXr+UquJk2ahISEhIeHU0fOxcWF1+bl7u5Ou7GMrVy5kpq10NBQT0/PJUuWsB2aNm06d+5cVu7bt++KFSvWrl0bEBDAWkvqbfr7+69Zs4a6qXXq1GG7qZ9X/UCAIlD4gC1dupQSRaZMmcKr8nJ2dvbz86OX9ZgxY6gPSWW+IRd7hAULFsTFxV29epVq7O3to6OjZ8+ezXZQQcNFysm8efOmTp1K5U6dOlGlnZ3djRs3qPE8e/Zs//79qUb9vBoPBCgCRhiDSU2NCmpG3NzcKD+RkZG+vr41a9bkG3KxRxg3blx2dra3tzfVpKennz59OjMzk+2gIikp6cGDB4GBgbTz9u3bDx8+TJXUNT158uTLly8pouzrmdTPq/FAgCJgtC6iRpcvX2YhJBMnTuS1eVFCzpw5U7duXb6upFAoNH6jE3X81q1bl5iYOHr06NatW/NaNern1fNAAOMSGLBr165RbNq2bVumTJnatWu3atWKb8jL0dGxXbt2d+/e5etKKSkpVE+jMvopTTBS00TdPNp09OjRW7duaZsXUT+vngcCGJ3AgMXHx69evbpfv35hYWH+/v7U/eMbcrExGLUtaWlpu3bt4rVKFIb9+/fPnDkzODhY+m6zc+fOHTt2bM6cOXRg6dKlf/zxR1avQv28eh4IYHS4mh7AOHA1PUBRQ8AABELAAATSdwzm6urKSwCQV2JiIv3UOAbDJAeAcWCSA6CoIWAAAiFgAAIhYAACFWyS42270yTOa1zF7bzGZdAsIm16q+6VjPOKUHzOK4JBAUt5y+72j/MKUkzOK4JBAUtNTbWysvLq6sXXc3l6eNLPv/76i62Smzdv8hIdlZbKS8pvgOIlC4uKrhXpJztWLioqKicnp1y5cuwfnf5R0tPT2XnvPMnJyC7FdjMW+rPZq3k1aysrHedle0rUn7NcTGwML2lSoN+X7UDizr/gJcN0GFCfl/Q479bNW+mnj6+PIb8vPcj06dP5ilKh/51DQkJ4SRN6nryklO+/syBm/D7YnWRFpsLWvkIl4y625Z0PnHvzpwHA6MwjYBmvbOwcNX9njiGsrG1K2dpdufummQWG2gSVZkEFNSm6WxWi0ny9nd72afpStvaxT9L4CuiNwqOeH9ax1EifQJZIBRuD+fv78/XccdfDRw+lMvM48TEv5X0E+RiMfQMHO5aNx5gjh49o7KO7NO5GPTq2j0YjBvUY+fcelpaW7388mdVMHznIu3u7a3fuf7EwMiEphVVqlJGckHTpvxrPK/99mYKOsuTUj9X2+9ap0JbtoKLK2KW8ZGFx3yaIl/La8vubYYZftOa/HX8mR4v4fSlC8tTJj2XZoxdb4c6rI7pEJer5/jsLUjKvRXR0sP/pu6+Ppzj1XHLUe8XxJdNGsPq/dWj14eIjk3ffHjLM/6dv57FKKCh6Zctf3CqrKtTbNEm+fc6SyuwD1q5pgymbzyekPadyZtarRg3qnNn2DS1Dw0+xHaKO33FysGdl0E29I6cSjLc2J4Vm9gG7/yjRvUJZvmJh8UnYSWq4aHn+UuzFAQD6KFjAaKwluanEyjTukpYkmQcybE9G27H8NPn5Z8DH1EZVd6tY1rZ05FeT4pXNlw53H2fMHjeYCounjaADWaW5oHGXtKz3fiYtv/abKS02yzOkhR+mtLFteWnhVTq9nrhQdvPUmzId8t1T9wiqZDO/Fqxrm/fKV61JbVRAwGcH1n1FhXtJmr8JWDL6378fTyx9euuS1WdSey4+QgW+AUAwMwuYpaXlrPFDQg9eo/I3h278fdVxVp+vc7HJPZccTc7MUlhYDIs4vfLLMXwDaCI1ZfrId8+3edhWsGn67t278/XcS6LYxVDy3h31DHkpr6pVq/JS7pQ9O1Y+fX/50mWN07jSNH2g/8CoqznKfQ0S4f++92g+za1jmj4+Pp7tI4i2aWv5NL18ap56hryUV/e/zeAlZbeQl/KST9kbOE1PXT6WGfW3JVh3kUWOjmWdQylg2t6WwDQ9x8ZOjHwExUZcDN9VDR+KKcmPZWWG76rd0vV7t41rz1cKy9m+dErS628pMWsUKmnhVVD8mFkXMTs7Z83Gvd0buvH1Qvl+dLvPgt40C6ADNR3qrYeOLt/rnqWsPaE93+b+ISlYF9GpwpsL/lm3kO1DjZKyTl/spnjsWHkXMTY2VmMXQuVKjsDASVHHX3cDKtiX3jy6XfrTdPty5XouOcK2yn3S2uMf7WvQyC0u+dnwyNOsct/nHTp8+gUrEzPtImpruAzpIhaHTw8w6teI8JImKhnO97yClKArOXI/n0fp8v1kcL9+/bt17Tb+b/wGSP+Z0vm96vwPQR2LB926/q1rl24V7awcbI38aReAfJlnwGSkRsa+NP/jZGVpWdfNgZVPneLXc9y9e9eujMC/XkVj6K6y0sKr1FQOniEtvKqAdM8oqNOx/+t30/R+P61EMu+ATfr+3M5dO9zc3L7+OiT0P6/n7lV4/d2/UaOGH3zQvXaduvGp+bwfDWB05h2w6w/TfCMv2HWf+OVvGQpeZ7H+RMyec3GsHLTz4s0a3qfLte/9zVFWA/nSNi2hrS2S768yKaIy5/EWMvsuIvkrOc+VHN+fin2Znee9smdZuC6xMFT6flJUdPT6MG2oomABqyZT0bUiLaxcVYbvqsZFRn5sXRm+a35aeTqv9GvxY6AXLVHD39xwuZG7o1+7GtLCa5XYzt+Pbjd3YGMrK7HfYWRcD1dPkhZepfTqc3uNS/yXC6TFLzpNWvhhULQKNk3fqHEjvp77IUvH8o5SmdE2ZU+54qXcD1myY+W5+vnnnzVO46pM0//fF1Mijt1mZYrNh4v5BP2ByZ2HhEez8vhudb/64Up2zuueo20p6wCvWst/5t/Gs3t8u85DprEy0TFNb6ppa1N94LLQvy9r6wo6XY5p+mKqXe03H4ImlLFdEzqu8GthbWX5JD2LLSf+TFw6uPmGgLa0dc/nHeUXBJ+5eIOXQBMds4IqpBGX7p7h2zyRaJYBK2uVbZX7Vhj79Jf3it8mbPxDasrIf6/GU82QddFshz253x5Fqfty2QZWBhDNXL+T48y2b/osPfoqW5o71Mu0Xg1uXPgjctfPfF2pGH4nh4P1m/8pbuVr8pJhHqXd4SULi6fZ8UXw+1LDpdKs4WJfs/H+x5PDPnn3XwMaSU2Zbi09namvuHvXHpV0AQhlxtP0H30+P/DLkCAvV0oODcB8Wr/zblVH53Kvv3/c0a6Ue4WyXepXmtKj/oHJnfdP6vgy5g/K5KkL19mxoA8Dx046RmVvDzMOGHn1KntySDgl59MJsyLXrHkVc6ax5V8fvfOiRemHVdNvnv1l78y5X7f9ZEo736m/nr7IjwG96XiPWJreAN0KHzD2Lpb8HS2G1ajXK9/o4lgN24c/nMFeZL089b/ru3+JDt/+445DJw4dPxcbl8C3aZfz6mUxvETx70N7SQuNnYyytOjcQFr4aUA882jBaJiVk/2KrxjV8/SUag5CHrkkUW+vtM3LU6/SwI5lCWMeAevVvNqztCdZmU8VioJNG+pAbVdGSqKtjcKulDld2CGUtnjoH6fXlx7KOpboSZpHwKytrPq1fKeyo8WLtMcZyQlGWXKeJddyfFnbCZcpgkD6vg+GG8MJgvOa5LwiaHwfTN+A0Sbc2tTocF5TnVcEgwLG0J8BXhJD2x8znNe4cF4RjBAwANCmRF0qBWAWEDAAgRAwAIEQMACBEDAAgTTPIgJA4WAWEaDoqLZg5cqV4yt4HwygIF68eJGenq5yvQhaMACBCtOCWVtbR0VFsXJqauqFCxc2btz4/Hlhvvm9WrVq06ZNmzBhAl8vLPlTYhYtWnTx4kU3N7dHjx45ODisWrVq6NChfJsmKr/UyZMnt2zZoij4p2OM9RuB2TFyCzZp0iR6yc6aNcvFxcXb25vXmhR7Sgyli3IVFBRkY2PDN+uBPUJwcHCzZs3atGnDawEKy9AuYnJyMv2x9/TU9fVdpvL06VNqSV69KvAHlhMSEq5fv05tEV8HKCxDA+bs7NyhQ4eYmBhLS8sBAwYsWbIkIiKC+kiOjq+/Fpteo0uXLv3ss8/WrFlDfbY6deqwo9q3b0/1q1ev7t+/P6shTZs2DQkJocNnzpxZXXm18TvvvLNs2bIxY8asXbt2wYIF77333owZMyIjI+fNm1elShV2lA7Ugq1fv56v5GrSpAmdJTw8nJ6k/Nu85dzd3Wk3lrGVK1dSsxYaGkp/ROi3Yx+soKc6d+5ctnPfvn1XrFhBzzAgIIC1ltTb9Pf3V/mV1c+rfiCUPIUPGCWEXr7088mTJ9u3b6fBG3VAqXM1duzYxMTEPn36sN2cnJzolUotydmzZ1mcKlWqNGzYMHqpTZ06Vfoie6qkAzdv3jx+/PgzZ85MmTKF9WXLly9/4sQJOvzKlSuff/75jh07Ro8eff/+/Z49e7ID5dhTInQ4r8qL/hz4+fnRy5pCS31IKvMNudgjUJjj4uKuXr1KNfb29tHR0bNnz2Y7qKARLOWEAk+/C5U7depElXZ2djdu3JD/yurn1XgglDyGjsHoxUcBe/nyJfXH6C83jXnoT7KXl5f06VGqpz4k7UCvV1ZZt25dev1RYDIzM3///Xe2W+PGjanywoULz58//+mnn7Kzsz08PKieQkuvyKysLPpJL/o///yTytJDqZDGYNTU8Kq8qBlxc3Oj/FAz6OvrW7Om6pfmskcYN24cPQE2sKQncPr0aXqqbAcVSUlJ9DciMDCQdqa/MocPH6ZK9V9Z/bwaD4SSx9Au4oEDB7p160Z/s2vVqtW7d+/ly5ePGDFi06ZNfLMWOTl57t9FaKSkUlmqlJBbKl++fJmFkEycOJHX5kUJoVaU/hDwdSWFQqHxg7fU8Vu3bh012tS0tm795l5KKtTPq+eBYNYMDdi9e/fu3LnTvXv3smXLUkjoLz0NMFq1asU3a0ItVf369Rs0aECxlF5Y1KDVq1ePRlllypShxNra2t5SfnzNuK5du0axadu2LZ2ldu3a2p4nDSDbtWt39+5dvq6UkpJC9TQ8o5/SBCM1TdTNo01Hjx6lJ6xtXkT9vHoeCObO0IARasR69OhBr5JLly7Nnz+fBhXU/6FRB9+shv5m//vf/x41atTChQulnt7jx49Xr17t4+NDPzt27Lh48WLqCrJNRhQfH0+P369fv7CwMH9/f+r+8Q252BiM2pa0tLRdu3bxWiUKw/79+2fOnEnjTOoMs8pz584dO3Zszpw5dCANGn/88UdWr0L9vHoeCOYOl0oBGAculQIoaggYgEAIGIBA+o7BXF1deQkA8kpMTKSfGsdgmOQAMA5McgAUNQQMQCAEDEAgBAxAoIJNcuDuGwDaGDSLSJtw/ygAHQwKWArugAigk0EBS01NtbKy8vf3Z6vu7/NbXx/fruHe2BJPD/5dHem2fP9yz9/cITsmNoYVXOvx+2RvD6uck5NDz4GFil709Izl55VIx2oknVcj9WOPHD4iPy9AIeB9MICihoABCGRowJKeHpUWXmVh0WHQVrbwdYC3FVowAIEQMACBChYw9/dD2HLjogVbAECHgk3TzwyLZ6tStK6fdeMlC4uWjYaxgvokvjQRn3jjzbS++iS+tml6r65ebAdJQSfi5dSPjYqKwjQ9GAjT9ABFDQEDEMiYAaOeHlv4umwSn69rQf1MtvB1gJKipLVgIUpbN2+lhVcBmA66iAACFTJgUqeu/2ePpIVvs7DYG+nGFvVN0kUeuM4D3gYlpAVjPUMyXcnH14cW1lFEXxFMCF1EAIGKKGBSl/L4dh9pka4L4TsBlDhF3YJ5enhKC6/Sg/wotsTExsgXvp/yGg5a2D68Su1w6Shp4fsBGFsJ6SKyQZc07pKPxwjfCaDIFXXApDej5e9HA5RUmOQAEKikBYx1FNEzhGLCmAGTpgr5OsBbD11EAIEQMACBEDAAgRAwAIGs5V/CkZ2dLf9GARsbG15Sft+ApaVlpz4ZbPXGeX5U/WbprECkSom0VdpUseqb/SvmfhuItDXhwev7MNBzsLJ6nXwqZ2Vl0XmdnJ1SUlPki6eHZwWnCtqWmNgYlf3li/qx//vf/+TnBSgEig+9XFW+1gWvJwCBijpg0lQ+ZvPhbYAWDEAgBAxAINyAj1M5L0BBGXQDPtqEW8gC6GBQwBj6M89LYmhrrEx1XgD9GSFgAKANvpseoKghYAACIWAAAiFgAAIhYAACIWAAAiFgAAIhYAACIWAAAiFgAAIhYAACIWAAAiFgAAIhYAACIWAAAiFgAAIhYAACIWAAAiFgAMJYWPw/gMd9VF8oRfoAAAAASUVORK5CYII="},2536:(e,A,s)=>{s.d(A,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgYAAABMCAMAAAAhvY+xAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAmVBMVEUgICAfHx+TrgBsgAAdHR1ETBcaGhoYGBgcHBwXFxcgTJne////////3plMICAgdLz//7x0ICB0vP/emUwgIEyZ3v+8dCBMmd7e/96ZTCB0vLz/vLy8/7yZdCAgIHS8/950dCDe/7y8//+Z3t68mZne3pl0vN68vN7/vHSZdJmZmbzemZnevHT//96Z3ry8dHQgdHT/3ry83t49H5H4AAAAAWJLR0QMgbNRYwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UHEBQKLlVyRfcAAANUSURBVHja7ZmLVuIwEIbThIjUrAUK1O6luOxFdlf39v4PtzNJ8XLUHoHOrOj/HWg91pOPSf9OGzQGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/kd0CptdqyozlnaPXQLaSLFpI54y4ybU/idfk0552KqZYl4SJYuDjqTHuaCAeA28cu6RNLk6YN168JiqIPFSXkTfZOIEypsy6TQyGx9InJ8aANvImb12MgbSJC4oxEDeZdJooBxImjgFVwhfPSCMGnmMgbvKWTw9VJm2icmxqcSOlGDiR2cssnxgqRiEGto2BU4qBfWkxcPGCFYwBObz8lHH75HmTNlFNlDcuTCHaSjGw3scYWCcZA6cSA5dqUYiBd1oxSN3Uq8XAS8XAK8Ugzhm1thcUA5uajrcKgeNG+mJiwOXI950UA48YbBkDeg3VYjBUi8FQJQb0Fq/pJgYiC8bB0XAUGUp/AQLT8zVl2eC4RfrrUJiesQn/hoEJAAAAAK+e/CSEN6cPHyvGEx3TNIRSxTSbh7BQmj1TPXqkX1MVwr4nKj+rjXk7eXjK3r3vMQYdpvyDaZa1hqk5N/nHiYaJXKseY9Blmu4d7Nm8a4imxxh0m8zsU61k6rGoblP1+cupiunr3lO3uTSa5cV4Qq15ndpm2zvbGWuW306oaTfL77F3U3v6sf21221qVRqmYq1TU36ZxxiIm3hT7lcTf9IqXNXNqh2ojrOUpuo6BtTdqCk1qzU/LTSrhamuti+k02SmpY6pCmujYqL21sZAYfbSLXUHU0FPFfllShkNEscpAonykxik8nYM+OB0wTt68yfa5k7+FNNsXhodE/0mTo24qSrNphvI15Suou1Ns58T6hmL9Hft8KSKd+iKe2d156ZQ881pt0KeYrp+MBA3XT9RSZt+rUJIj/YHUVNFS412+CK2FBODnDYcAz5InYjc7fA7trUu0+Z2LW/6vTkibkqdXMt0tm9N1GHiYwUHKfz5Wxe8CC3SSnQTg+VFaBMZP0bY5SGny1TxlVNqmHj1vVCp6SYG0qZm1W9Njy6x7g3W59obpgMx3R9+2uf3YzAdhunu8LxMHcvEGaYDMQEAAAAAAAAAAAAAAAAAAAAAAAAAAABeH/8AhpObGP9JKO8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMTZUMjA6MTA6MzkrMDA6MDC+SnKDAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA3LTE2VDIwOjEwOjM5KzAwOjAwzxfKPwAAAABJRU5ErkJggg=="},4684:(e,A,s)=>{s.d(A,{A:()=>n});const n=s.p+"assets/images/project_brushes-484bef5b9f88783efdb874adc920437d.png"},8453:(e,A,s)=>{s.d(A,{R:()=>a,x:()=>i});var n=s(6540);const r={},t=n.createContext(r);function a(e){const A=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function i(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:A},e.children)}}}]);